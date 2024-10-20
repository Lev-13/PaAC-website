import "./DropMenu.css";
import * as Popover from "@radix-ui/react-popover";
import { Cross1Icon, MixerHorizontalIcon , } from "@radix-ui/react-icons";
import { NavLink } from "react-router-dom";
import {useState } from "react";

const DropMenu = () => {

  const [open, setIsOpen] = useState(false);

  return (
    <Popover.Root open={open}>
      <Popover.Trigger
        asChild
        onClick={() => {
          setIsOpen((open) => {
            return !open;
          });
        }}
      >
        <button className="IconButton" aria-label="Update dimensions">
          {open ? <Cross1Icon /> : <MixerHorizontalIcon />}
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent" sideOffset={5}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <NavLink
              to="/"
              className="dropDownMenuLink"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <p className="menuItems">Home</p>
            </NavLink>
            <NavLink
              to="/people"
              className="dropDownMenuLink"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <p className="menuItems">About</p>
            </NavLink>
            <NavLink
              to="/library"
              className="dropDownMenuLink"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <p className="menuItems">Library</p>
            </NavLink>
            <NavLink
              to="/events"
              className="dropDownMenuLink"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <p className="menuItems">Events</p>
            </NavLink>
            <NavLink
              to="/open-projects"
              className="dropDownMenuLink"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <p className="menuItems">Open Projects</p>
            </NavLink>
            <a
              href="https://medium.com/@paac_iitr"
              target="_blank"
              className="dropDownMenuLink"
              onClick={() => {
                setIsOpen(false);
              }}
              rel="noreferrer"
            >
              <p className="menuItems">Blog</p>
            </a>
            <NavLink
              to="/gallery"
              className="dropDownMenuLink"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <p className="menuItems">Gallery</p>
            </NavLink>
            <NavLink
              to="/contact-us"
              className="dropDownMenuLink"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <p className="menuItems">Contact</p>
            </NavLink>
          </div>
          {/* <Popover.Close className="PopoverClose" aria-label="Close">
            <Cross2Icon />
          </Popover.Close> */}
          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
export default DropMenu;
