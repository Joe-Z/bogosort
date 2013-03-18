function BOGOSORT(LIST)
{
	// AN OPTIMIZED BOGOSORT
	// RUNS IN O(N LOG(N))
	for(var i = 0; i < LOG(LENGTH(LIST)); i++)
	{
		SHUFFLE(LIST);

		if(ISSORTED(LIST))
			return LIST.list;
		
	}

	return "KERNEL PAGE FAULT (ERROR CODE: 2)";
}
