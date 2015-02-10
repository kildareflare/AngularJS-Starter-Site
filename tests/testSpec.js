describe('Search Service (Js/App/Search/Scripts/SearchService)', function () {

    var searchService; //case must match service name

    //global variable so that it is available in all tests
    var mocks;

    function createMocks() {
        var mocks = {
            mockStore: {}
        }

        //setup mock services
        return mocks;
    }

    //Load module under test and inject angular items and provide dependencies
    beforeEach(function () {

        mocks = createMocks();

        module("app");

        // Ensure that our dependencies are configured
        // This needs to happen before injection, below.
        module(function ($provide) {
            $provide.value('store', mocks.mockStore);
        });

        // inject your service for testing.
        // The _underscores_ are a convenience thing
        // so you can have your variable name be the
        // same as your injected service.
        inject(function (_$q_, _searchService_) {
            $q = _$q_;;
            searchService = _searchService_;
        });

        //Global Setup
    });

    describe("Service Instantiation", function () {

        it('Search Service is defined', function () {
            // Assert
            expect(searchService).toBeDefined();
        });
    });

});