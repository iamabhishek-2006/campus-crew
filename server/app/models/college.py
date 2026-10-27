from app.models.base import Base
import uuid
from sqlalchemy.orm import Mapped ,mapped_column , relationship
from sqlalchemy import Uuid , String,DateTime
from datetime import datetime,timezone
from typing import TYPE_CHECKING

if TYPE_CHECKING:
 from app.models.user import User

class College(Base):  
    __tablename__ = "colleges"

    id:Mapped[uuid.UUID]=mapped_column(
        Uuid(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4
    )
    name:Mapped[str]=mapped_column(
        String(150),
        nullable=False
    )
    slug:Mapped[str]=mapped_column(
        String(150),
        nullable=False)

    website:Mapped[str]=mapped_column(String(150),nullable=False)

    logo:Mapped[str]=mapped_column(String,nullable=False)

    created_at:Mapped[datetime]=mapped_column(
        DateTime(timezone=True),
        default=lambda:datetime.now(timezone.utc))

    updated_at:Mapped[datetime]=mapped_column(
        DateTime(timezone=True),
        default=lambda:datetime.now(timezone.utc),
        nullable=False)

    user:Mapped[list["User"]]=relationship("User",back_populates="college")