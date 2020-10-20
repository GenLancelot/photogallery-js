var numer=1;
function przewin(klawisz)
{
	klawisz = window.event;
	if(numer>1)
	{
		if (klawisz.keyCode == '37') {
        galeria(-1);
    }
	}
	if(numer<10)
	{
		if (klawisz.keyCode == '39') {
        galeria(1);
    }
	}
	
    
}
function galeria(i)
{
	numer+=i;
	var zdje=numer+'.jpg';
	document.getElementById('zdj').src = zdje;
	document.getElementById('prv').removeAttribute("disabled",);
	document.getElementById('nxt').removeAttribute("disabled");
	document.getElementById('start').setAttribute("disabled","disabled");
	if(numer==1)
	{
		document.getElementById('prv').setAttribute("disabled","disabled");
	}
	else if(numer==10)
	{
		document.getElementById('nxt').setAttribute("disabled","disabled");
	}
}
var liczba=0;
function licznik()
{
	liczba++;
	var pier;
	var drug;
	if(liczba<10)
	{
		pier=0;
	}
	else 
	{
		pier=liczba%100;
		pier=Math.floor(pier/10);
	}
	var drug=liczba%10;
	document.getElementById('dziesiatki').innerHTML=pier;
	document.getElementById('jednosci').innerHTML=drug;
	if(liczba==99)
	{
		liczba=-1;
	}
}
function zeruj()
{
	liczba=0;
	document.getElementById('dziesiatki').innerHTML=0;
	document.getElementById('jednosci').innerHTML=0;
}
function totolotek()
{
	var tab=new Array();
	var wyswietl="";
    function sprawdzl(i,liczba)
	{
	var check=1;
		for(var j=0;j<i;j++)
		{
			if(liczba==tab[j])
			{
				check=0;
				break;
			}
		}
		if(check==0)
		{
			return 55;
		}
		else
		{
			return liczba;
		}
	}
	function sprawdzp(i,liczba)
	{
	var check=1;
		for(var j=0;j<i;j++)
		{
			if(liczba==podane[j])
			{
				check=0;
				break;
			}
		}
		if(check==0)
		{
			return 55;
		}
		else
		{
			return liczba;
		}
	}
	var zmienna;
	for(var i=0;i<=5;i++)
	{
		tab[i]=Math.floor(Math.random()*100)+1;
		if(i>0)
		{
			zmienna=tab[i];
			tab[i]=sprawdzl(i,zmienna);
		}
		while(tab[i]>49 )
		{
			tab[i]=Math.floor(Math.random()*100)+1;
			if(i>0)
			{
				zmienna=tab[i];
				tab[i]=sprawdzl(i,zmienna);
			}
			
		}
		wyswietl=wyswietl+tab[i]+" ";
	}
	wyswietl+="<br>";
	var podane=new Array();
	for(var i=0;i<=5;i++)
	{
		podane[i]=prompt("Podaj liczbe");
		if(i>0)
		{
			zmienna=podane[i];
				podane[i]=sprawdzp(i,zmienna);
		}
		while(podane[i]<0 || podane[i]>50)
		{
			podane[i]=prompt("Podaj liczbe");
			if(i>0)
			{
				zmienna=podane[i];
				podane[i]=sprawdzp(i,zmienna);
			}
		}
		wyswietl=wyswietl+podane[i]+" ";
	}
	var trafione=0;
	wyswietl+="<br>Trafileś:";
	for(var i=0;i<=5;i++)
	{
		for(var j=0;j<=5;j++)
		{
			if(podane[i]==tab[j])
			{
				trafione++;
				wyswietl+=podane[i]+" ";
			}
		}
	}
	if(trafione>0)
	{
		wyswietl+=" Masz "+trafione+" trafionych";
	}
	else
	{
		wyswietl+=" Nic nie trafiłeś!";
	}

	document.getElementById('wynik').innerHTML=wyswietl.toString();
}