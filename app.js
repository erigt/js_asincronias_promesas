const data = [];
async function fetchingData(){
	const books = await getData();
	console.log(books);
}