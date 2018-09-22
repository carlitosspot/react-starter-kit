const products = {
  abc123456789: {
    id: 'abc123456789',
    type: 'cleanings',
    type_id: '5a7937c16915e6722749909ff',
    title: 'Extra Cleaning',
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    feature: [
      'Full House Clean',
      'Clean Bend and Pillow Sheets',
      'Clean Bathroom towels',
      'Dish Cleaning',
    ],
    image:
      'https://res.cloudinary.com/dvvlwbxun/image/upload/v1537335325/bedding.jpg',
  },
};

export default function getProduct(req, res) {
  const { id, apartmentId } = req.params;
  const product = { ...products[id], apartmentId };
  return res.json(product);
}
