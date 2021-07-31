//Run-length encoding (RLE) is a simple data compression algorithm. It works by turning 
//consecutive counts of characters into a number and a single character. For example,the string 
//of "QQQQQ" turns into "5Q" because there are 5 consecutive characters of the letter Q. 

const uncompressedString = "QQQUUUUUUUlllllllqqQQQQQQQQQTTA";


function printRLE(uncompressedString)
    {
        let n = uncompressedString.length;
        for (let i = 0; i < n; i++)
        {
            let count = 1;
            while (i < n -1 && uncompressedString[i] == uncompressedString[i+1])
            {
                count++;
                i++;
            }
             
            console.log(uncompressedString[i]);
            console.log(count);
        }
    }
     
    printRLE(uncompressedString);