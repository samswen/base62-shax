'use strict'

const BASE62='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const base62 = require('base-x')(BASE62);
const crypto = require('crypto');

function base62_sha1(str) {
    const hash = crypto.createHash('sha1');
    hash.update(str);
    return base62.encode(hash.digest());   
}

function base62_sha224(str) {
    const hash = crypto.createHash('sha224');
    hash.update(str);
    return base62.encode(hash.digest());   
}

function base62_sha256(str) {
    const hash = crypto.createHash('sha256');
    hash.update(str);
    return base62.encode(hash.digest());   
}

function base62_sha384(str) {
    const hash = crypto.createHash('sha384');
    hash.update(str);
    return base62.encode(hash.digest());   
}

function base62_sha512(str) {
    const hash = crypto.createHash('sha512');
    hash.update(str);
    return base62.encode(hash.digest());   
}

module.exports = {
    base62_sha1,
    base62_sha224,
    base62_sha256,
    base62_sha384,
    base62_sha512
}