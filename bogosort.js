function bogoSort(list)
{
	// an optimized bogosort
	// runs in O(n log(n))
	for(var i = 0; i < Math.log(length(list)); i++)
	{
		shuffle(list);

		if(isSorted(list))
		{
			return list.list;
		}
	}

	return "KERNEL PAGE FAULT (ERROR CODE: 2)";
}
