const fs = require('fs');
const path = require('path');

function createLogs() {
    const logDir = path.join(__dirname, 'Logs'); 

    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir);
        console.log('Logs directory created');
    }

    process.chdir(logDir);

    for (let i = 0; i <= 9; i++) {
        const fileName = `log${i}.txt`;
        fs.writeFileSync(fileName, `This is log file ${i}`);
        console.log(`Created file: ${fileName}`);
    }
}

createLogs();
