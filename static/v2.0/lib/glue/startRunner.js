
	const init = async () => {
		const channels = {
			definitions: [
				{
					name: 'Red',
					meta: {
						color: 'red',
						fdc3: {
							id: 'fdc3.channel.1',
							displayMetadata: {
								name: 'Channel 1',
								glyph: '1',
							},
						},
					},
					data: {}
				},
				{
					name: 'Green',
					meta: {
						color: 'green',
						fdc3: {
							id: 'fdc3.channel.4',
							displayMetadata: {
								name: 'Channel 4',
								glyph: '4',
							},
						},
					},
					data: {}
				},
				{
					name: 'Blue',
					meta: {
						color: "blue",
						fdc3: {
							id: 'fdc3.channel.6',
							displayMetadata: {
								name: 'Channel 6',
								glyph: '4',
							},
						},
					},
					data: {}
				},
				{
					name: 'Yellow',
					meta: {
						color: '#FFE733',
						fdc3: {
							id: 'fdc3.channel.3',
							displayMetadata: {
								name: 'Channel 3',
								glyph: '3',
							},
						},
					},
					data: {}
				},
				{
					name: 'Orange',
					meta: {
						color: '#fa5a28',
						fdc3: {
							id: 'fdc3.channel.2',
							displayMetadata: {
								name: 'Channel 2',
								glyph: '2',
							},
						},
					},
					data: {}
				},
				{
					name: 'Purple',
					meta: {
						color: '#c873ff',
						fdc3: {
							id: 'fdc3.channel.8',
							displayMetadata: {
								name: 'Channel 8',
								glyph: '8',
							},
						},
					},
					data: {}
				},
				{
					name: 'Magenta',
					meta: {
						color: '#cc338b',
						fdc3: {
							id: 'fdc3.channel.7',
							displayMetadata: {
								name: 'Channel 7',
								glyph: '7',
							},
						},
					},
					data: {}
				},
				{
					name: 'Cyan',
					meta: {
						color: '#80f3ff',
						fdc3: {
							id: 'fdc3.channel.5',
							displayMetadata: {
								name: 'Channel 5',
								glyph: '5',
							},
						},
					},
					data: {}
				},
			],
		};

		const applications = {
			local: [
				{
					"name": "ChannelsAppId",
					"title": "Channels App",
					"description": "Testing channels app",
					"type": "window",
					"details": {
						"url": "http://localhost:3001/v2.0/channels",
						"top": 100,
						"left": 100,
						"width": 800,
						"height": 600,
						"icon": "http://localhost:3000/scott-logic-icon-256.png"
					}
				}
			]
		};

		const config = { applications, channels };

		const { glue } = await GlueWebPlatform(config);

		window.glue = glue;

		console.log('Glue initialized successfully')
	};

	init().catch(console.error);