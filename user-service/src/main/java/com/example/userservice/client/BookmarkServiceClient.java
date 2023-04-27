package com.example.userservice.client;

import com.example.userservice.dto.ResponseBookmarkDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "bookmark-service")
public interface BookmarkServiceClient {

    @GetMapping("/bookmark-service/{userId}/bookmarks")
    List<ResponseBookmarkDto> getBookmarks(@PathVariable String userId);
}
