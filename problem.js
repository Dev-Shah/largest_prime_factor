var num=13195;
var count=0;
var max=0;
for(var i=2;i<=num;i++)
{
    if(num%i===0)
    {
        for(var j=1;j<=i;j++)
        {
            if(i%j===0)
            {
                count++;
            }
        }
        if(count===2)
        {
            if(i>max)
            {
                max=i;
            }
        }
    }
    count=0;
}
console.log(max);