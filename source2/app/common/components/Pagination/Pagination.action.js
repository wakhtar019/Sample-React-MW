import { makeActionCreator } from "../../utility";
export const PAGINATION_INIT = "CORE/PAGINATION_INIT";
export const initializePagination = makeActionCreator(PAGINATION_INIT, true, "pager");
export const SET_COMPLETE_PAGINATION_INFO = "CORE/SET_COMPLETE_PAGINATION_INFO";
export const setCompletePaginationInfo = makeActionCreator(SET_COMPLETE_PAGINATION_INFO, true, "paginationInfo");
export const SET_PAGE_SIZE = "CORE/SET_PAGE_SIZE";
export const setPageSize = makeActionCreator(SET_PAGE_SIZE, true, "pageSize");
export const SET_CURRENT_PAGE = "CORE/SET_CURRENT_PAGE";
export const setCurrentPage = makeActionCreator(SET_CURRENT_PAGE, true, "page");
export const SET_PAGINATION_INDEXES = "CORE/SET_PAGINATION_INDEXES";
export const setPaginationIndexes = makeActionCreator(SET_PAGINATION_INDEXES, true, "paginationIndexes");
