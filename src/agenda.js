const Agenda = require('agenda');
const os = require('os');

const mongoConnectionString = 'mongodb://mongodb:27017/agenda';

const agenda = new Agenda({db: {
    address: mongoConnectionString,
    collection: 'agenda',
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }},
    // maxConcurrency: 1,
    lockLimit: 1,
    processEvery: '1 seconds',
    name: os.hostname()
});


agenda.define('TestJob', async (job, done)=> {
    console.log("Started");
    setTimeout(() => {
        console.log("End");
        job.attrs.data.count = job.attrs.data.count + 1;
        done();
    }, 5000);
});

module.exports = agenda;
