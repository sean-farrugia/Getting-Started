# Gecko Notes

## Overview
The __Gecko__ Project consists of __3__ main repositories:
- [Component Library](https://github.com/BetssonGroup/cbt-gecko-component-library) - Used to create Web Components, by using __StencilJS__.
- [WordPress(WP) Instance](https://github.com/BetssonGroup/cbt-gecko-wordpress) - Consumes Web Components created from the Component Library. This repository is used to __create__ and __manage__ campaings for landing pages.
- [Subdomains App](https://github.com/BetssonGroup/cbt-gecko-frontend) - This repository is the frontend application for the Gecko project, which fetches the Campaigns from the WP Instance repo.

![Complex Architecture](architecture.png)

## Component Library Repository
The main purpose of this repository is to create a library of Web Components, created manually by using the StencilJS tool, which will eventually be used by the Wordpress Plugin Repository to create a somewhat "drag and drop" style application which will add and customise the Web Components retrieved from this repository.

These Web Components will be exported and then imported to the WP plugins as __blocks__.

It is important to note that these Web Components need to be developped in a way to be customisable since there are multiple different brands which will be used within this company.

## WordPress Instance (Multiple Plugin) Repository
