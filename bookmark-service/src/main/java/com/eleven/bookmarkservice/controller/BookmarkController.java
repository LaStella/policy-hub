package com.eleven.bookmarkservice.controller;

import com.eleven.bookmarkservice.dto.BookmarkDto;
import com.eleven.bookmarkservice.jpa.BookmarkEntity;
import com.eleven.bookmarkservice.service.BookmarkService;
import com.eleven.bookmarkservice.vo.RequestDto;
import com.eleven.bookmarkservice.vo.ResponseDto;
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
    public ResponseEntity<ResponseDto> createBookmark(@PathVariable("userId") String userId, @RequestBody RequestDto requestDto) {
        BookmarkDto bookmarkDto = new BookmarkDto();
        BeanUtils.copyProperties(requestDto, bookmarkDto);
        bookmarkDto.setUserId(userId);

        BookmarkDto createdBookmark = bookmarkService.createBookmark(bookmarkDto);

        ResponseDto responseDto = new ResponseDto();
        BeanUtils.copyProperties(createdBookmark, responseDto);

        return ResponseEntity.status(HttpStatus.CREATED).body(responseDto);
    }

    @GetMapping("/{userId}/bookmarks")
    public ResponseEntity<List<ResponseDto>> getBookmarks(@PathVariable("userId") String userId) {
        List<BookmarkEntity> bookmarkList = bookmarkService.getBookmarksByUserId(userId);

        List<ResponseDto> result = new ArrayList<>();
        bookmarkList.forEach(v -> {
            ResponseDto responseDto = new ResponseDto();
            BeanUtils.copyProperties(v, responseDto);
            result.add(responseDto);
        });

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
}
