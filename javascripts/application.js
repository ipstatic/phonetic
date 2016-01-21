$(document).ready(function() {
  var input = $(':input');
  var target = $('#target');

  input.focus();

  input.on('input', function() {
    var str = this.value;
    target.empty();
    target.append('<dl>');
    for (var i = 0, len = str.length; i < len; i++) {
      ph(str[i].toLowerCase());
    }
    target.append('</dl>');
  });

  function ph(a) {
    var t = {
      a: ['Alpha', 'AL-FAH'],
      b: ['Bravo', 'BRAH-VOH'],
      c: ['Charlie', 'CHAR-LEE'],
      d: ['Delta', 'DELL-TAH'],
      e: ['Echo', 'ECK-OH'],
      f: ['Foxtrot', 'FOKS-TROT'],
      g: ['Golf', 'GOLF'],
      h: ['Hotel', 'HOH-TEL'],
      i: ['India', 'IN-DEE-AH'],
      j: ['Juliett', 'JEW-LEE-ETT'],
      k: ['Kilo', 'KEY-LOH'],
      l: ['Lima', 'LEE-MAH'],
      m: ['Mike', 'MIKE'],
      n: ['November', 'NO-VEM-BER'],
      o: ['Oscar', 'OSS-CAH'],
      p: ['Papa', 'PAH-PAH'],
      q: ['Quebec', 'KEY-BECK'],
      r: ['Romeo', 'ROW-ME-OH'],
      s: ['Sierra', 'SEE-AIR-RAH'],
      t: ['Tango', 'TANG-GO'],
      u: ['Uniform', 'YOU-NEE-FORM'],
      v: ['Victor', 'VIK-TAH'],
      w: ['Whiskey', 'WISS-KEY'],
      x: ['X-ray', 'ECKS-RAY'],
      y: ['Yankee', 'YANG-KEY'],
      z: ['Zulu', 'ZOO-LOO'],
      1: ['One', 'WUN'],
      2: ['Two', 'TOO'],
      3: ['Three', 'TREE'],
      4: ['Four', 'FOW-ER'],
      5: ['Five', 'FIFE'],
      6: ['Six', 'SIX'],
      7: ['Seven', 'SEV-EN'],
      8: ['Eight', 'AIT'],
      9: ['Nine', 'NIN-ER'],
      0: ['Zero', 'ZEE-RO']
    };
    if (a in t) {
      target.append('<dt>' + t[a][0] + '</dt><dd>' + t[a][1] + '</dd>');
    };
  };
});
