initSidebarItems({"fn":[["fetch_bookmark","This is similar to fetch_tree, but does not recursively fetch children of folders."],["fetch_bookmarks_by_url",""],["fetch_public_tree","Call fetch_public_tree_with_depth with FetchDepth::Deepest. This is the function called by the FFI when requesting the tree."],["fetch_public_tree_with_depth","Call fetch_tree with a depth parameter and convert the result to a ProtoBookmark, and ensure the requested item’s position and parent info are provided as well."],["recent_bookmarks",""],["search_bookmarks",""],["update_bookmark_from_message",""]],"struct":[["PublicNode","This type basically exists to become a msg_types::BookmarkNode, but is slightly less of a pain to deal with in rust."],["SEARCH_QUERY",""]]});