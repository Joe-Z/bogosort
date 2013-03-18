function sortIt()
{
	var values = document.getElementById('values').value.split(',');

	for(var i = 0; i < values.length; i++)
	{
		values[i] = +values[i];
	}

	document.getElementById('result').value = BOGOSORT({list: values})
}

function LENGTH(listObject)
{
	return listObject.list.length;
}

function SHUFFLE(listObject)
{
	var oldList = listObject.list,
		newList	= [],
		randOne = 0
		randTwo = 0;

	for(var i = 0; i < oldList.length; i++)
	{
		randOne = Math.floor(Math.random() * oldList.length);
		randTwo = Math.floor(Math.random() * oldList.length);

		swap(listObject, randOne, randTwo);
	}
}

function ISSORTED(listObject)
{
	var list = listObject.list;

	for(var i = 0; i < list.length - 1; i++)
	{
		var currentElement	= list[i],
			nextElement		= list[i + 1];

		var isBigger = currentElement > nextElement;

		if(currentElement > nextElement)
		{
			return false;
		}
	}

	return true;
}

function swap(listObject, idxOne, idxTwo)
{
	var oneValue = listObject.list[idxOne];

	listObject.list[idxOne] = listObject.list[idxTwo];
	listObject.list[idxTwo] = oneValue;
}

function LOG(n)
{
	if(n === 1)
	{
		return 1;
	}

	return Math.log(n);
}
