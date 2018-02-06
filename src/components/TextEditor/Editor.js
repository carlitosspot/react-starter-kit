import React from 'react';
import PropTypes from 'prop-types';
import Draft from 'draft-js';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Editor.css';

const { Editor, EditorState, RichUtils } = Draft;

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote':
      return s.RichEditorBlockquote;
    default:
      return null;
  }
}

const INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  // { label: 'Underline', style: 'UNDERLINE' },
  // { label: 'Monospace', style: 'CODE' },
];

const InlineStyleControls = props => {
  const currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <div className={s.RichEditorControls}>
      {INLINE_STYLES.map(type => (
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

InlineStyleControls.propTypes = {
  editorState: PropTypes.object, // eslint-disable-line
  onToggle: PropTypes.func, // eslint-disable-line
};

class LuxeEditor extends React.Component {
  constructor(props) {
    super(props);

    const { content } = this.props;

    const editorState = content || EditorState.createEmpty();

    this.state = { editorState, loading: true };

    this.focus = () => this.editor.focus();

    this.onChange = this.onChange.bind(this);

    this.handleKeyCommand = command => this._handleKeyCommand(command); // eslint-disable-line no-underscore-dangle
    this.onTab = e => this._onTab(e); // eslint-disable-line no-underscore-dangle
    this.toggleBlockType = type => this._toggleBlockType(type); // eslint-disable-line no-underscore-dangle
    this.toggleInlineStyle = style => this._toggleInlineStyle(style); // eslint-disable-line no-underscore-dangle
  }

  componentDidMount() {
    /* eslint-disable react/no-did-mount-set-state */
    this.setState({
      loading: false,
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !nextState.loading;
  }

  onChange(editorState) {
    this.props.onContentChange(this.props.name, editorState);
    this.setState({ editorState });
  }

  _handleKeyCommand(command) {
    const { editorState } = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  _onTab(e) {
    const maxDepth = 4;
    this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
  }

  _toggleBlockType(blockType) {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle),
    );
  }

  render() {
    const { editorState, loading } = this.state;

    if (loading) {
      return null;
    }

    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = s.RichEditorEditor;
    const contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (
        contentState
          .getBlockMap()
          .first()
          .getType() !== 'unstyled'
      ) {
        className += s.RichEditorHidePlaceholder;
      }
    }

    return (
      <div className={s.RichEditorRoot}>
        <BlockStyleControls
          editorState={editorState}
          onToggle={this.toggleBlockType}
        />
        <InlineStyleControls
          editorState={editorState}
          onToggle={this.toggleInlineStyle}
        />
        <div role="presentation" className={className} onClick={this.focus}>
          <Editor
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            onTab={this.onTab}
            placeholder="Tell a story..."
            ref={editor => {
              this.editor = editor;
            }}
            spellCheck
          />
        </div>
      </div>
    );
  }
}

LuxeEditor.propTypes = {
  name: PropTypes.string.isRequired,
  onContentChange: PropTypes.func.isRequired,
  content: PropTypes.object, // eslint-disable-line
};

/* eslint-disable react/no-multi-comp */
class StyleButton extends React.Component {
  constructor(props) {
    super(props);
    this.onToggle = e => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = s.RichEditorStyleButton;
    if (this.props.active) {
      className += s.RichEditorActiveButton;
    }

    return (
      <span
        role="presentation"
        className={className}
        onMouseDown={this.onToggle}
      >
        {this.props.label}
      </span>
    );
  }
}

StyleButton.propTypes = {
  onToggle: PropTypes.func, // eslint-disable-line
  style: PropTypes.string, // eslint-disable-line
  active: PropTypes.bool, // eslint-disable-line
  label: PropTypes.string, // eslint-disable-line
};

const BLOCK_TYPES = [
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  // { label: 'H3', style: 'header-three' },
  // { label: 'H4', style: 'header-four' },
  // { label: 'H5', style: 'header-five' },
  // { label: 'H6', style: 'header-six' },
  // { label: 'Blockquote', style: 'blockquote' },
  { label: 'UL', style: 'unordered-list-item' },
  { label: 'OL', style: 'ordered-list-item' },
  // { label: 'Code Block', style: 'code-block' },
];

const BlockStyleControls = props => {
  const { editorState } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className={s.RichEditorControls}>
      {BLOCK_TYPES.map(type => (
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

BlockStyleControls.propTypes = {
  editorState: PropTypes.object, // eslint-disable-line
  onToggle: PropTypes.func, // eslint-disable-line
};

export default withStyles(s)(LuxeEditor);
