class CountWords {
  constructor(dataFile, stopwordsFile) {
    this.loadData(dataFile);
    this.loadStopWords(stopwordsFile);
  }

  loadData(dataFile) {
    this.descriptions = require(dataFile).map(item => item.Description.toLowerCase());
  }

  loadStopWords(stopWordsFile) {
    this.stopWords = require(stopWordsFile).map(item => item.toLowerCase());
  }

  count() {
    const wordCount = {};
    this.descriptions.reduce((prev, cur) => {
      let re = /[a-zçğışüö\']+/gm;
      let words = cur.match(re);
      words.forEach(word => {
        if (this.stopWords.indexOf(word) === -1) {
          if (!(word in wordCount)) {
            wordCount[word] = 0;
          }
          wordCount[word] += 1;
        }
      });
    }, {});
    return wordCount;
  }
}

cw = new CountWords('./data.json', './stop_words.json');
let counts = cw.count();
console.log(counts);
