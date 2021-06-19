function generateSquare(n)
{
    const magicSquare = new Array(n).fill(0).map(() => Array(n).fill(0));
 
    let i = parseInt(n / 2);
    let j = n - 1;
 
    for (let num = 1; num <= n * n;) {
        if (i == -1 && j == n)
        {
            j = n - 2;
            i = 0;
        }
        else {
            if (j == n) {
                j = 0;
			}
 
            if (i < 0) {
                i = n - 1;
			}
        }
 
        if (magicSquare[i][j] != 0) {
            j -= 2;
            i++;
            continue;
        }
        else {
			magicSquare[i][j] = num++;
		}
            
        j++;
        i--;
    }
 
    return magicSquare
}
