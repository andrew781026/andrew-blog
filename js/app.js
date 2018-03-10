var blogApp = angular.module('blog-app', []);
blogApp.controller('main-controller', [function () {
    var self = this;

    self.posts = [];

    self.posts.push({
        title: '王澍的第一篇教學',
        subtitle: '此篇教學介紹 angularJS 如何使用',
        meta: '由 王澍 於 2018-02-11 15:20:11 上傳此篇文章',
        poster: {name: ' 王澍 '},
        time: ' 2018-02-11 15:20:11 ',
        href: '#'
    });

    self.posts.push({
        title: 'Man must explore, and this is exploration at its greatest',
        subtitle: 'Problems look mighty small from 150 miles up',
        poster: {name: ' Start Bootstrap '},
        time: ' September 24, 2018 '
    });

    self.posts.push({
        title: 'I believe every human has a finite number of heartbeats. I don\'t intend to waste any of mine.',
        subtitle: 'show 5 tips in Java serialize',
        poster: {name: ' Start Bootstrap '},
        time: ' September 18, 2018 '
    });

    self.posts.push({
        title: 'Science has not yet mastered prophecy',
        subtitle: 'We predict too much for the next year and yet far too little for the next ten.',
        poster: {name: ' Start Bootstrap '},
        time: ' August 24, 2018 '
    });

    self.posts.push({
        title: 'Failure is not an option',
        subtitle: 'Many say exploration is part of our destiny, but it’s actually our duty to future generations.',
        poster: {name: ' Start Bootstrap '},
        time: ' July 8, 2018 '
    });

    self.posts.push({
        title: ' Intellij 教學(一) ',
        subtitle: ' 學習 Intellij 快捷鍵 , 及其使用時機 ',
        poster: {name: ' 王澍 '},
        time: ' 2017-11-22 09:24:23 '
    });

    self.posts.push({
        title: 'Java Serialize 5 個技巧 ',
        poster: {name: ' 王澍 '},
        time: ' 2017-11-22 09:24:23 '
    });

}]);