export const lookup = [
  {
    $unwind: '$options'
  },
  {
    $lookup: {
      from: 'options',
      localField: 'options.option',
      foreignField: '_id',
      as: 'options.option',
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