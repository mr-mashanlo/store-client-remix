export const lookup = [
  {
    $lookup: {
      from: 'images',
      localField: 'images',
      foreignField: '_id',
      as: 'images'
    }
  },
  {
    $lookup: {
      from: 'categories',
      localField: 'categories',
      foreignField: '_id',
      as: 'categories'
    }
  },
  {
    $lookup: {
      from: 'options',
      localField: '_id',
      foreignField: 'product',
      as: 'options',
      pipeline: [
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
      ]
    }
  }
];