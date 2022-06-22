// This function separete the url by slashes into an array and returns the last item of the array
const getLastUrlPath = (s) =>
  s.split('/')[
    s.split('/').length - (s.substring(s.length - 1) === '/' ? 2 : 1)
  ];

export default getLastUrlPath;
