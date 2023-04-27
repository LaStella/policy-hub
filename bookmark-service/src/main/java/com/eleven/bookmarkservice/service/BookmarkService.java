package com.eleven.bookmarkservice.service;

import com.eleven.bookmarkservice.dto.BookmarkDto;
import com.eleven.bookmarkservice.jpa.BookmarkEntity;

import java.util.List;

public interface BookmarkService {
    BookmarkDto createBookmark(BookmarkDto bookmarkDto);

    BookmarkDto getBookmarkByBookmarkId(String bookmarkId);

    List<BookmarkEntity> getBookmarksByUserId(String userId);
}