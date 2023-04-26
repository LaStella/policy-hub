package com.eleven.bookmarkservice.service;

import com.eleven.bookmarkservice.dto.BookmarkDto;
import com.eleven.bookmarkservice.jpa.BookmarkEntity;
import com.eleven.bookmarkservice.jpa.BookmarkRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class BookmarkServiceImpl implements BookmarkService {
    BookmarkRepository bookmarkRepository;

    @Autowired
    public BookmarkServiceImpl(BookmarkRepository bookmarkRepository) {
        this.bookmarkRepository = bookmarkRepository;
    }

    @Override
    public BookmarkDto createBookmark(BookmarkDto bookmarkDto) {
        bookmarkDto.setBookmarkId(UUID.randomUUID().toString());
        BookmarkEntity bookmarkEntity = new BookmarkEntity();
        BeanUtils.copyProperties(bookmarkDto, bookmarkEntity);
        bookmarkRepository.save(bookmarkEntity);

        BookmarkDto returnValue = new BookmarkDto();
        BeanUtils.copyProperties(bookmarkEntity, returnValue);

        return returnValue;
    }

    @Override
    public BookmarkDto getBookmarkByBookmarkId(String bookmarkId) {
        BookmarkDto returnValue = new BookmarkDto();
        BookmarkEntity bookmarkEntity = bookmarkRepository.findByBookmarkId(bookmarkId);
        BeanUtils.copyProperties(bookmarkEntity, returnValue);

        return returnValue;
    }

    @Override
    public List<BookmarkEntity> getBookmarksByUserId(String userId) {
        return bookmarkRepository.findByUserId(userId);
    }
}
