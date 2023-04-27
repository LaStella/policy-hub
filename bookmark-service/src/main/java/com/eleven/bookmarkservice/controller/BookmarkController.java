package com.eleven.bookmarkservice.controller;

import com.eleven.bookmarkservice.dto.BookmarkDto;
import com.eleven.bookmarkservice.jpa.BookmarkEntity;
import com.eleven.bookmarkservice.service.BookmarkService;
import com.eleven.bookmarkservice.vo.RequestBookmarkDto;
import com.eleven.bookmarkservice.vo.ResponseBookmarkDto;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/bookmark-service")
public class BookmarkController {
    Environment env;
    BookmarkService bookmarkService;

    @Autowired
    public BookmarkController(Environment env, BookmarkService bookmarkService) {
        this.env = env;
        this.bookmarkService = bookmarkService;
    }

    @GetMapping("/health_check")
    public String status() {
        return String.format("It's Working in Bookmark Service on PORT %s",
                env.getProperty("local.server.port"));
    }

    @PostMapping("/{userId}/bookmarks")
    public ResponseEntity<ResponseBookmarkDto> createBookmark(@PathVariable("userId") String userId, @RequestBody RequestBookmarkDto requestBookmarkDto) {
        BookmarkDto bookmarkDto = new BookmarkDto();
        BeanUtils.copyProperties(requestBookmarkDto, bookmarkDto);
        bookmarkDto.setUserId(userId);

        BookmarkDto createdBookmark = bookmarkService.createBookmark(bookmarkDto);

        ResponseBookmarkDto responseBookmarkDto = new ResponseBookmarkDto();
        BeanUtils.copyProperties(createdBookmark, responseBookmarkDto);

        return ResponseEntity.status(HttpStatus.CREATED).body(responseBookmarkDto);
    }

    @GetMapping("/{userId}/bookmarks")
    public ResponseEntity<List<ResponseBookmarkDto>> getBookmarks(@PathVariable("userId") String userId) {
        List<BookmarkEntity> bookmarkList = bookmarkService.getBookmarksByUserId(userId);

        List<ResponseBookmarkDto> result = new ArrayList<>();
        bookmarkList.forEach(v -> {
            ResponseBookmarkDto responseBookmarkDto = new ResponseBookmarkDto();
            BeanUtils.copyProperties(v, responseBookmarkDto);
            result.add(responseBookmarkDto);
        });

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
}
