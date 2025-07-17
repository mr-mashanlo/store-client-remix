export const lookup = [
  {
    $lookup: {
      from: 'images',
      localField: 'image',
      foreignField: '_id',
      as: 'image'
    }
  },
  {
    $addFields: {
      image: { $arrayElemAt: [ '$image', 0 ] }
    }
  }
];