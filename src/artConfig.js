scene.registerConfig('truck', [
  {
    type: 'Entity',
    opts: {
      loop: false,
      viewOpts: {
      },
      hitOpts : {
        offsetX: -72,
        offsetY: -99,
        width: 150,
        height: 99
      }
    }
  },
  {
    type: 'ImageView',
    opts: {
      offsetX: -72,
      offsetY: -99,
      width: 140,
      height: 100
    }
  }
]);

scene.registerConfig('sauce', {
  type: 'Entity',
  opts: {
    loop: false,
    viewOpts: {
      url: 'resources/images/sauce'
    },
    hitOpts : {
      radius: 25
    }
  }
});

scene.registerConfig('sauceBottle', {
  type: 'ImageView',
  opts: {
    width: 75,
    height: 150,
    offsetX: -37,
    offsetY: -120,
    anchorX: 37,
    anchorY: 120
  }
});

scene.registerConfig('bananaLauncher', {
  type: 'ImageView',
  opts: {
    width: 165,
    height: 63,
    offsetX: -45,
    offsetY: -35,
    anchorX: 45,
    anchorY: 35
  }
});

scene.registerConfig('hotdogLauncher', {
  type: 'ImageView',
  opts: {
    width: 200,
    height: 65,
    offsetX: -60,
    offsetY: -35,
    anchorX: 60,
    anchorY: 35
  }
});

scene.registerConfig('hotdog', {
  type: 'Entity',
  opts: {
    width: 200,
    height: 65,
    offsetX: -60,
    offsetY: -35,
    anchorX: 60,
    anchorY: 35,
    url: 'resources/images/hotdog_2.png'
  }
});

scene.registerConfig('banana', {
  type: 'Entity',
  opts: {
    width: 200,
    height: 65,
    offsetX: -60,
    offsetY: -35,
    anchorX: 60,
    anchorY: 35,
    url: 'resources/images/banana_2.png'
  }
});
