import chai, { expect } from 'chai';
import { getAlbum, getAlbumTracks, getAlbums } from '../src/album';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import { describe } from 'mocha';

sinonStubPromise(sinon);
chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Album', () => {
  let stubedFetch;
  let promise;

  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch')
    promise = stubedFetch.returnsPromise();
  });
  afterEach(() => stubedFetch.restore());

  describe('smoke tests', () => {

    it('should have getAlbum method', () => {
      expect(getAlbum).to.exist;
    });


    it('should have getAlbumTracks method', () => {
      expect(getAlbumTracks).to.exist;
    });

    it('should have getAlbums method', () => {
      expect(getAlbums).to.exist;
    })
  });

  describe('getAlbum', () => {
    it('should call fetch fuction', () => {
      const album = getAlbum();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const album = getAlbum('4eGGMf6xNBDbmIrEjRcsfQ');
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4eGGMf6xNBDbmIrEjRcsfQ');

      const album2 = getAlbum('4eGGMf6xNBDbmIrEjRcsfX')
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4eGGMf6xNBDbmIrEjRcsfX');
    });

    it('should return the correct data from Promise', () => {
      promise.resolves({album: 'name'});
      const album = getAlbum('4eGGMf6xNBDbmIrEjRcsfQ');
      expect(album.resolveValue).to.be.eql({album: 'name'});
      
    });

  });

  describe('getAlbums', () => {
    it('should call fetch function', () => {
      const albums = getAlbums(['382ObEPsp2rxGrnsizN5TX','1A2GTWGtFfWp7KSQTwWOyo','2noRn2Aes5aoNVsU6iWThc']);
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      
      const albums = getAlbums(['382ObEPsp2rxGrnsizN5TX','1A2GTWGtFfWp7KSQTwWOyo','2noRn2Aes5aoNVsU6iWThc']);
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc');
    });

    it('should return the correct data from Promise', () => {
      promise.resolves({album: 'name'});
      const albums = getAlbums(['382ObEPsp2rxGrnsizN5TX','1A2GTWGtFfWp7KSQTwWOyo','2noRn2Aes5aoNVsU6iWThc']);
      expect(albums.resolveValue).to.be.eql({album: 'name'});
      
    });
    
  });

  describe('getAlbumTracks', () => {
    it('should call fetch fuction', () => {
      const album = getAlbumTracks();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const album = getAlbumTracks('4eGGMf6xNBDbmIrEjRcsfQ');
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4eGGMf6xNBDbmIrEjRcsfQ/tracks');

    });

    it('should return the correct data from Promise', () => {
      promise.resolves({album: 'name'});
      const album = getAlbumTracks('4eGGMf6xNBDbmIrEjRcsfQ');
      expect(album.resolveValue).to.be.eql({album: 'name'});
      
    });    
  });
});

