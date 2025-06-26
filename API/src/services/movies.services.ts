import * as fs from "fs";
import path from "path";

const dataPath = path.join(__dirname, '../repositories/movies.json');

export class MovieService{

    get(){
        const data = fs.readFileSync(dataPath, "utf-8");
        return JSON.parse(data);
        
    }
     post(){
        let data: any[]= fs.readFileSync(dataPath, "utf-8");
        data.push();
        return JSON.parse(data);
        
    }

}