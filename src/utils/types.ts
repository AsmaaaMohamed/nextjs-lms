import { Post, Comment, User, Prisma } from "@prisma/client";

export type JWTPayload = {
  id: number;
  isAdmin: boolean;
  username: string;
};

export type CommentWithUser = Comment & { user: User };

export type SinglePost = Post & { comments: CommentWithUser[] };
export type CourseWithRelations = Prisma.CourseGetPayload<{
  include: {
    comments:{
      include:{
        user:true
      }
    },
    chapters:{
      include:{
        chapterSections: {
          include: {
            userProgress:true
          },
        }
      }
    }
  };
}>;