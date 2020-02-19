// const expect = require('chai').expect;
// const request = require('supertest');
//
// const server = require('../../server');
//
// const conn = require('../../index);
//
// const DB_URI = process.env.ATLAS_URI;
//
// describe('POST /add', () => {
//     // before((done) => {
//     //     conn.connect()
//     //         .then(() => done())
//     //         .catch((err) => done(err));
//     // })
//     //
//     // after((done) => {
//     //     conn.close()
//     //         .then(() => done())
//     //         .catch((err) => done(err));
//     // })
//
//     it('OK, creating a new user works', (done) => {
//         request(server/users).post('/add')
//             .send({ username: 'Sylvia'})
//             .then((res) => {
//                 const body = res.body;
//                 expect(body).to.contain.property('username');
//                 expect(body).to.contain.property('_id');
//                 expect(body).to.contain.property('createdAt');
//                 expect(body).to.contain.property('updatedAt');
//                 done();
//             })
//             .catch((err) => done(err));
//     });
//
//     // it('Fail, note requires text', (done) => {
//     //     request(server).post('/add')
//     //         .send({ name: 'dd' })
//     //         .then((res) => {
//     //             const body = res.body;
//     //             expect(body.errors.text.name)
//     //                 .to.equal('ValidatorError')
//     //             done();
//     //         })
//     //         .catch((err) => done(err));
//     // });
// })