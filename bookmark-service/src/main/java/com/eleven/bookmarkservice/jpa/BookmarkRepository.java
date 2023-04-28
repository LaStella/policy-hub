package com.eleven.bookmarkservice.jpa;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookmarkRepository extends JpaRepository<BookmarkEntity, Long> {
    BookmarkEntity findByBookmarkId(String bookmarkId);
    List<BookmarkEntity> findByUserId(String userId);
}