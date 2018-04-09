/**
 * Created by w on 2018/3/15.
 */
import {promisify} from 'util';
import {resolve as r} from 'path';
import {readFile,writeFileSync as wfs} from 'fs';

// promisify(readFile)(r(__dirname,'../package.json')).then(data=>{
//     data = JSON.parse(data);
//
//     console.log(data.name);
//     wfs(r(__dirname,'./name'),String(data.name),'utf8');
// });

async function readFileAsync(filePath) {
    let data = await promisify(readFile)(filePath);

    data = JSON.parse(data);
    console.log(data.name);
    wfs(r(__dirname,'./name'),String(data.name),'utf8');
}

console.log(r(__dirname,'../package.json'));

readFileAsync(r(__dirname,'../package.json'));