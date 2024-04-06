       function prm() {
         return new Promise((resolve, reject) => {
           if (1 + 1 == 2) {
             resolve("Right");
           } else {
             reject("Wrong");
           }
         });
       }
       async function getData() {
         let get = await prm();
         console.log(get);
       }
       getData();