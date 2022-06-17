"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var react_1 = require("react");
var react_query_1 = require("react-query");
var common_1 = require("../types/common");
var useTableAPI = function (_a) {
    var params = _a.params, path = _a.path, pageArgs = _a.pageArgs, handlePage = _a.handlePage;
    var _b = (0, react_1.useState)(false), isSearching = _b[0], setIsSearching = _b[1];
    var _c = (0, react_1.useState)(false), isQuery = _c[0], setIsQuery = _c[1];
    var currentPage = pageArgs.currentPage, pageViewCount = pageArgs.pageViewCount, tableSortOption = pageArgs.tableSortOption;
    var getListData = function (bodyArgs) { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, axios_1.default.get("".concat(path), {
                        params: __assign({}, bodyArgs),
                    })];
                case 1:
                    res = _a.sent();
                    return [2, res];
            }
        });
    }); };
    var _d = (0, react_query_1.useQuery)(['getListData', currentPage, pageViewCount, isSearching], function () {
        return getListData(__assign(__assign({}, params), { pageable: {
                page: currentPage,
                size: +pageViewCount.key,
            }, searchable: isSearching ? params === null || params === void 0 ? void 0 : params.searchable : [], sortable: [
                {
                    property: tableSortOption.key,
                    direction: tableSortOption.sortableOperator || common_1.SortableOperator.DESC,
                },
            ] }));
    }, {
        refetchOnWindowFocus: false,
        enabled: isQuery,
        retry: 1,
        onSuccess: function (res) {
            setIsQuery(false);
        },
        onError: function (error) {
            setIsQuery(false);
            alert("\uB370\uC774\uD130\uB97C \uBD88\uB7EC\uC624\uB294\uB370 \uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4: ".concat(error.message));
        },
    }), queryData = _d.data, queryError = _d.error, status = _d.status, isFetching = _d.isFetching, refetch = _d.refetch;
    var onSearch = function () {
        handlePage(1);
        if (!isQuery)
            setIsQuery(true);
        if (!isSearching)
            setIsSearching(true);
    };
    var onCancelSearch = function () {
        if (!isQuery)
            setIsQuery(true);
        if (isSearching)
            setIsSearching(false);
    };
    var doRefetch = function () {
        setIsQuery(true);
        refetch();
    };
    (0, react_1.useEffect)(function () {
        if (!isQuery)
            setIsQuery(true);
    }, [tableSortOption, currentPage, pageViewCount]);
    return {
        state: {
            status: status,
            listData: queryData === null || queryData === void 0 ? void 0 : queryData.data._data.content,
            totalDataCount: queryData === null || queryData === void 0 ? void 0 : queryData.data._data.total,
            pickupCount: queryData === null || queryData === void 0 ? void 0 : queryData.data._data.pickupCount,
            listError: queryError,
            isFetching: isFetching,
            isSearching: isSearching,
            currentPage: currentPage,
            pageViewCount: +pageViewCount.key,
        },
        actions: {
            onSearch: onSearch,
            onCancelSearch: onCancelSearch,
            doRefetch: doRefetch,
            getDataWithCurrentState: function () {
                (function () { return refetch(); });
            },
        },
    };
};
exports.default = useTableAPI;
//# sourceMappingURL=useTableAPI.js.map