var movies = [
    "ACADEMY DINOSAUR",
    "ACE GOLDFINGER",
    "ADAPTATION HOLES",
    "AFFAIR PREJUDICE",
    "BENEATH RUSH",
    "BERETS AGENT",
    "BETRAYED REAR",
    "BEVERLY OUTLAW",
    "BIKINI BORROWERS",
    //...
    "YENTL IDAHO",
    "YOUNG LANGUAGE",
    "YOUTH KICK",
    "ZHIVAGO CORE",
    "ZOOLANDER FICTION",
    "ZORRO ARK"
  ];

  function binarySearch(arr, val) {

    let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (arr[mid] === val) {
          console.log(arr[mid]);
        return mid;
      }
  
      if (val < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return -1;
  }