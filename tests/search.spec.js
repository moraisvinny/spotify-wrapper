import chai, { expect } from 'chai';
import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from '../src/search';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
global.fetch = require('node-fetch');

chai.use(sinonChai);
sinonStubPromise(sinon);

let fetchedStub;
let promise;

describe('Search', () =>{
  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.returnsPromise();
  });
  
  afterEach(() => {
    fetchedStub.restore();
  });

  describe('smoke tests', () => {

    it('should exist the search method', () => {
      expect(search).to.exist;
    })

    it('should exist the search albums method', () => {
      expect(searchAlbums).to.exist;
    })

    it('should exist the search Artists albums method', () => {
      expect(searchArtists).to.exist;
    })

    it('should exist the search Tracks method', () => {
      expect(searchTracks).to.exist;
    })

    it('should exist the search playlists method', () => {
      expect(searchPlaylists).to.exist;
    })
  });

  describe('Generic Search', () => {

    it('Should call fetch function', () => {

      const artists = search();
      expect(fetchedStub).to.have.been.calledOnce;
      
    });

    
    it('Should receive the correct URL to fetch', () => {

      context('passing one type', () => {
        const artists  = search('Incubus', 'artist');
        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');
  
        const albuns = search('Incubus', 'album');
        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
        
      })

      context('passing more than one type', () => {

        const artistsAndAlbums  = search('Incubus', ['artist', 'album']);
        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist,album');

      });

    });

    it('Should return the JSON data from the Promise', () => {

      promise.resolves({ body: 'json' });
      const artist = search('Incubus', 'artist');
      expect(artist.resolveValue).to.be.eql({ body: 'json' });

    });

  });

  describe('Artists Search', () => {
    it('should call fetch function', () => {
      const artists = searchArtists('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    })

    it('should call fetch with the correct URL', () => {
      const artists = searchArtists('Incubus');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');
    })
  });

  describe('Album Search', () => {
    it('should call fetch function', () => {
      const artists = searchAlbums('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    })

    it('should call fetch with the correct URL', () => {
      const artists = searchAlbums('Incubus');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
    })
  });

  describe('Track Search', () => {
    it('should call fetch function', () => {
      const artists = searchTracks('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    })

    it('should call fetch with the correct URL', () => {
      const artists = searchTracks('Incubus');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track');
    })
  });

  describe('Playlist Search', () => {
    it('should call fetch function', () => {
      const artists = searchPlaylists('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    })

    it('should call fetch with the correct URL', () => {
      const artists = searchPlaylists('Incubus');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist');
    })
  });
});
