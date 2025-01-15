/*
你可能知道 Facebook 和其他页面上的“点赞”系统。人们可以“点赞”博客文章、图片或其他项目。我们想创建一个应显示在此类项目旁边的文本。

实现一个函数，该函数接受一个包含点赞该项目的人的名字的数组。它必须返回如示例中所示的显示文本：

[]                                -->  "no one likes this" (没有人点赞)
["Peter"]                         -->  "Peter likes this" (Peter 点赞了)
["Jacob", "Alex"]                 -->  "Jacob and Alex like this" (Jacob 和 Alex 点赞了)
["Max", "John", "Mark"]           -->  "Max, John and Mark like this" (Max、John 和 Mark 点赞了)
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this" (Alex、Jacob 和其他 2 人点赞了)
注意：对于 4 个或更多名字，“和其他 2 人”中的数字会相应增加。
*/

function likes(names) {
  if (!names.length) return 'no one likes this';

  let result = '';
  const length = names.length;
  if (length === 1) return `${names[0]} likes this`;
  else if (length === 2) return `${names[0]} and ${names[1]} like this`;
  else if (length === 3)
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  else return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
}
