import * as SQLite from 'expo-sqlite';
const database = SQLite.openDatabase('places.db');

export function init(){
    const promise = new Promise((resolve , reject)=>{
        database.transaction((tx)=>{
            tx.executeSql(`
                CREATE TABLE IF NOT EXISTS places (
                    id INTEGER PRIMARY KEY NOT NULL,
                    title TEXT NOT NULL,
                    imageUrl TEXT NOT NULL,
                    lat REAL NOT NULL,
                    lng REAL NOT NULL
                )`,
            [],
            ()=>{
                resolve();
            },
            (_,error)=>{
                reject(error)
            }
            )
        })
    });
    return promise;
}


export function insertPlace(place){
    const promise = new Promise((resolve,reject) => {
        database.transaction((tx)=>{
            tx.executeSql(`
            INSERT INTO places (title , imageUrl , lat , lng) VALUES (? , ? , ? , ?)`,
            [place.title , place.imageUrl , place.lat , place.lng],
            (_,result)=>{
                console.log(result);
                resolve(result);
            },
            (_,error)=>{
                reject(error)
            }
            )
        })
    });
    return promise;
}


export function fetchAllPlaces(){
    const promise = new Promise((resolve,reject) => {
        database.transaction((tx)=>{
            tx.executeSql(`
            SELECT * FROM places`,
            [],
            (_,result)=>{
                resolve(result.rows._array);
            },
            (_,error)=>{
                reject(error)
            }
            )
        })
    });
    return promise;
}

export function fetchSingelPlace(id){
    const promise = new Promise((resolve,reject) => {
        database.transaction((tx)=>{
            tx.executeSql(`
            SELECT * FROM places WHERE id = ?`,
            [id],
            (_,result)=>{
                resolve(result.rows._array[0]);
            },
            (_,error)=>{
                reject(error)
            }
            )
        })
    });
    return promise;
}