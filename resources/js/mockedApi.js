import * as $ from 'jquery'
import * as mock from 'jquery-mockjax'
const mockjax = mock($, window)

let data = [
	{
		id: 1,
		title: "Read the Book",
		description: "I should read the **whole** book",
		color: '#BD8D31',
		status: "in-progress",
		tasks: [
			{ id: 1, name: "Task one", done: true },
			{ id: 2, name: "Task two", done: false },
			{ id: 3, name: "Task three", done: false }
		]
	},
	{
		id: 2,
		title: "Write some code",
		description: "Code along with the samples in the book. The complete source can be found at [github](https://github.com/pro-react)",
		color: '#3A7E28',
		status: "todo",
		tasks: [
			{ id: 1, name: "ContactList Example", done: true },
			{ id: 2, name: "Kanban Example", done: false },
			{ id: 3, name: "My own experiments", done: false }
		]
	},
	{
		id: 3,
		title: "Card Three title",
		description: "Card three detailed description",
		status: "done",
		tasks: []
	},
];

mockjax({
	url: "/api/cards",
	// Use a random value between 250ms and 750ms
	responseTime: [250],
	responseText: data.map(p => ({ ...p, tasks: undefined }))
});

mockjax({
	// matches /author/{any number here}/isbn/{any number with dashes here}
	// for example: "/author/1234/isbn/1234-5678-9012-0"
	url: /^\/api\/card\/([\d]+)$/,
	// names of matching params
	urlParams: ["id"],
	// Use a random value between 250ms and 750ms
	responseTime: [550],
	response: function (settings) {
		var id = settings.urlParams.id;
		this.responseText = data.filter(p => p.id == id)[0]
	}
});
export default null
console.log ($)