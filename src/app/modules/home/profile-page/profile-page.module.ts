import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProfilePageComponent } from "./profile-page.component";
import { ProfileHeaderComponent } from "./components/profile-header/profile-header.component";
import { ProfileNewPostComponent } from "./components/profile-new-post/profile-new-post.component";
import { FriendsComponent } from "./components/friends/friends.component";
import { FriendComponent } from "./components/friends/friend/friend.component";
import { PhotoComponent } from "./components/photos/photo/photo.component";
import { SharedModule } from "../../../shared/shared.module";
import { AppRoutingModule } from "../../../app-routing.module";
import { ProfilePostListComponent } from "./components/profile-post-list/profile-post-list.component";
import { ProfileBelongingResolver } from "./resolvers/profile-belonging.resolver";
import { NewAvatarModalComponent } from "./components/new-avatar-modal/new-avatar-modal.component";
import { ProfileAvatarComponent } from "./components/profile-header/profile-avatar/profile-avatar.component";
import { ProfileBackgroundComponent } from "./components/profile-header/profile-background/profile-background.component";
import { ProfileHeaderFriendshipControlsComponent } from "./components/profile-header/profile-header-friendship-controls/profile-header-friendship-controls.component";
import { ProfileHeaderSettingsComponent } from "./components/profile-header/profile-header-settings/profile-header-settings.component";
import { ProfileHeaderBasicDataComponent } from "./components/profile-header/profile-header-basic-data/profile-header-basic-data.component";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { PostModule } from "../../shared/post/post.module";
import { PhotosComponent } from "./components/photos/photos.component";
import { UserFriendsService } from "./services/user-friends.service";
import { FriendshipService } from "./services/friendship.service";
import { UserPostService } from "./services/user-post.service";
import { UserDataService } from "./services/user-data.service";
import { ExemplaryPhotosService } from "./services/exemplary-photos.service";
import { UserAvatarService } from "./services/user-avatar.service";
import { FriendsModalComponent } from "./components/friends/friends-modal/friends-modal.component";
import { FriendInModalComponent } from "./components/friends/friends-modal/friend-in-modal/friend-in-modal.component";

@NgModule({
  imports: [
    InfiniteScrollModule,
    CommonModule,
    SharedModule,
    PostModule,
    AppRoutingModule
  ],
  declarations: [
    ProfilePageComponent,
    ProfileHeaderComponent,
    ProfileNewPostComponent,
    FriendsComponent,
    PhotosComponent,
    FriendComponent,
    PhotoComponent,
    ProfilePostListComponent,
    ProfilePostListComponent,
    NewAvatarModalComponent,
    ProfileAvatarComponent,
    ProfileBackgroundComponent,
    ProfileHeaderFriendshipControlsComponent,
    ProfileHeaderBasicDataComponent,
    ProfileHeaderSettingsComponent,
    FriendsModalComponent,
    FriendInModalComponent
  ],
  providers: [
    ProfileBelongingResolver,
    FriendshipService,
    UserPostService,
    UserDataService,
    ExemplaryPhotosService,
    UserFriendsService,
    UserAvatarService
  ],
  entryComponents: [FriendsModalComponent]
})
export class ProfilePageModule {}
