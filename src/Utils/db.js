import SQLite from 'react-native-sqlite-storage';

var db;
export const dbOpen =()=>{
	 db = SQLite.openDatabase({
		name: 'noteAppdb',
		location: 'default',
		createFromLocation: '~www/noteAppdb.db',
	},
		() => {
			console.log("Başarılı")
		},
		error => {
			console.log(error);
		}
	
	
	);
}



export const addNote = (title,note,date) => {
	dbOpen();
	db.transaction(tx => {
		tx.executeSql('INSERT INTO notes (title, note,date) VALUES (?,?,?)',
			[title, note,"11 Ocak 2020"], (tx, results) => {
				if (results.rowsAffected > 0) {
					alert(
						'Success',
						'You are Registered Successfully',
						[
							{
								text: 'Ok',
								onPress: () =>
									that.props.navigation.navigate('HomeScreen'),
							},
						],
						{ cancelable: false }
					);
				} else {
					console.log("hata");
				}
			});
	});
	
}

export const updateNote = (title,note,id) => {
	dbOpen();
	db.transaction(tx => {
		tx.executeSql('UPDATE notes set title=?, note=? where id=?',
			[title, note,id], (tx, results) => {
				if (results.rowsAffected > 0) {
					alert(
						'Success',
						'You are Registered Successfully',
						[
							{
								text: 'Ok',
								onPress: () =>
									that.props.navigation.navigate('HomeScreen'),
							},
						],
						{ cancelable: false }
					);
				} else {
					console.log("hata");
				}
			});
	});
	
}

export const deleteNote = (id)=>{
	dbOpen();
	db.transaction(tx => {
		tx.executeSql('DELETE FROM notes WHERE id=?',
			[parseInt(id,10)], (tx, results) => {
				if (results.rowsAffected > 0) {
					alert(
						'Success delete',
						'You deleted Successfully',
						[
							{
								text: 'Ok',
								onPress: () =>
									that.props.navigation.navigate('HomeScreen'),
							},
						],
						{ cancelable: false }
					);
				} else {
					console.log("hata");
				}
			});
	});
	
}

export const getNotes = () =>{
	dbOpen();
	db.transaction(tx => {
		tx.executeSql('SELECT * FROM notes', null, (tx, results) => {
			const rows = results.rows;

			let users = [];

			 for(let i = 0; i < rows.length; i++) {
				users.push({
					...rows.item(i),
				});

			}
			if(users.length > 0 ){
				console.log("evet")
				return users.length;
			}else{
				console.log("hayır");
				return users;
			}
			
		});
	});
}
