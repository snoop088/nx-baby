module.exports = {
  name: 'pets',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/pets',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
