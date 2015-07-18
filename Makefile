BUILD = build
BOOKNAME = Week01
TITLE = metadata/title.txt
METADATA = metadata/metadata.xml
HOME = /Users/michaelherman
CHAPTERS = $(wildcard chapters/*.md)
PREVIEW = metadata/preview_beginning.md chapters/06.md metadata/preview_end.md
TOC = --toc --toc-depth=2
LATEX_CLASS = report
COVER_IMAGE = images/part2-cover.jpg

all: book

book: epub html pdf kindle

clean:
	rm -r $(BUILD)

check:
	./check

deploy:
	cp $(BUILD)/books/$(BOOKNAME).epub ../downloads/create_builds
	cp $(BUILD)/books/$(BOOKNAME).mobi ../downloads/create_builds
	cp $(BUILD)/books/$(BOOKNAME).pdf ../downloads/create_builds

epub: $(BUILD)/books/$(BOOKNAME).epub

html: $(BUILD)/html/$(BOOKNAME).html

pdf: $(BUILD)/books/$(BOOKNAME).pdf

epubcheck:
	epubcheck $(BUILD)/books/$(BOOKNAME).epub

preview: ./previews/$(BOOKNAME)Preview.pdf

kindle:
	cd $(BUILD)/books && kindlegen $(BOOKNAME).epub

$(BUILD)/books/$(BOOKNAME).epub: $(TITLE) $(CHAPTERS)
	mkdir -p $(BUILD)/books
	pandoc $(TOC) -S --epub-metadata=$(METADATA) --number-sections --epub-cover-image=$(COVER_IMAGE) -o $@ $^

$(BUILD)/html/$(BOOKNAME).html: $(CHAPTERS)
	mkdir -p $(BUILD)/html
	pandoc $(TOC) --standalone --to=html5 -o $@ $^

$(BUILD)/books/$(BOOKNAME).pdf: $(TITLE) $(CHAPTERS)
	mkdir -p $(BUILD)/books
	pandoc $(TOC) --template=latex/mytemplate.tex --variable mainfont=Georgia -V geometry:margin=1in --variable sansfont=Arial --variable fontsize=12pt --no-highlight --listings --latex-engine=xelatex  -V documentclass=$(LATEX_CLASS) -o $@ $^

./previews/$(BOOKNAME)Preview.pdf: $(TITLE) $(PREVIEW)
	pandoc $(TOC) --template=latex/mytemplate.tex --variable mainfont=Georgia -V geometry:margin=1in --variable sansfont=Arial --variable fontsize=12pt --no-highlight --listings --latex-engine=xelatex  -V documentclass=$(LATEX_CLASS) -o $@ $^

.PHONY: all book clean epub html pdf kindle check deploy
