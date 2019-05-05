import sgClient from '@sendgrid/mail';
import config from '../../../config';

const { sendGridKey } = config;
sgClient.setApiKey(sendGridKey);

const emailReceipt = amount => {
  const msg = {
    to: 'carlos@liveinluxe.com',
    from: 'info@liveinluxe.com',
    template_id: 'd-772b051b204445b09efb4b0b025489ce',
    substitutionWrappers: ['{{', '}}'],
    subject: 'your purchase with Live In Luxe',
    substitutions: {
      total_cost: '$239.85',
      order_number: '343434334343',
      order_summary: [
        {
          service_type: 'House cleaning',
          service_description: 'Sep 12',
          service_price: '$ 79.95',
        },
        {
          service_type: 'House cleaning 2',
          service_description: 'Sep 12',
          service_price: '$ 79.95',
        },
      ],
      subtotal: '$10.00',
      tax_rate: '3.2%',
      tax_total: `$${amount}`,
    },
  };
  return sgClient.send(msg);
};

export default emailReceipt;
