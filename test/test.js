/* eslint-disable no-undef */
'use strict';

const { base62_sha1, base62_sha224, base62_sha256, base62_sha384, base62_sha512 } = require('../src');

const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

const str1 = '1. Hello base62_shax 2. 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ 3. base62_sha1, base62_sha224, base62_sha256, base62_sha384, base62_sha512';
const str2 = '1. Hello base62_shax 2. 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ 3. base62_sha1, base62_sha224, base62_sha256, base62_sha384, base62_sha512';

describe('Test base62_sha1', () => {

    it('verifies base62_sha1 geneates a string', async () => {

        const sha1 = base62_sha1(str1);

        //console.log(sha1);
        assert.isNotNull(sha1);
        expect(sha1).to.be.an('string');
        expect(sha1.length).lessThan(28);

        const sha2 = base62_sha1(str2);

        //console.log(sha);
        assert.isNotNull(sha2);
        expect(sha2).to.be.an('string');

        expect(sha1).equals(sha2)
    });
});

describe('Test base62_sha224', () => {

    it('verifies base62_sha224 geneates a string', async () => {

        const sha1 = base62_sha224(str1);

        //console.log(sha1);
        assert.isNotNull(sha1);
        expect(sha1).to.be.an('string');
        expect(sha1.length).equals(38);

        const sha2 = base62_sha224(str2);

        //console.log(sha);
        assert.isNotNull(sha2);
        expect(sha2).to.be.an('string');

        expect(sha1).equals(sha2)
    });
});

describe('Test base62_sha256', () => {

    it('verifies base62_sha256 geneates a string', async () => {

        const sha1 = base62_sha256(str1);

        //console.log(sha1);
        assert.isNotNull(sha1);
        expect(sha1).to.be.an('string');
        expect(sha1.length).equals(43);

        const sha2 = base62_sha256(str2);

        //console.log(sha);
        assert.isNotNull(sha2);
        expect(sha2).to.be.an('string');

        expect(sha1).equals(sha2)
    });
});

describe('Test base62_sha384', () => {

    it('verifies base62_sha384 geneates a string', async () => {

        const sha1 = base62_sha384(str1);

        //console.log(sha1);
        assert.isNotNull(sha1);
        expect(sha1).to.be.an('string');
        expect(sha1.length).lessThan(66);

        const sha2 = base62_sha384(str2);

        //console.log(sha);
        assert.isNotNull(sha2);
        expect(sha2).to.be.an('string');

        expect(sha1).equals(sha2)
    });
});

describe('Test base62_sha512', () => {

    it('verifies base62_sha512 geneates a string', async () => {

        const sha1 = base62_sha512(str1);

        //console.log(sha1);
        assert.isNotNull(sha1);
        expect(sha1).to.be.an('string');
        expect(sha1.length).equals(86);

        const sha2 = base62_sha512(str2);

        //console.log(sha);
        assert.isNotNull(sha2);
        expect(sha2).to.be.an('string');

        expect(sha1).equals(sha2)
    });
});