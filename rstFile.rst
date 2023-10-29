=============
RST Sample File
=============

- `Go to page 1 <index.html>`_
- `Go to page 2 <2.html>`_
- `Go to RST file content <rstFile.html>`_

Introduction
------------

This is a sample reStructuredText (RST) file that demonstrates some basic RST tags.

Section Titles
--------------

RST uses section titles to create headings. There are different levels of headings, which are created using different characters:

Top-level Heading
~~~~~~~~~~~~~~~~~

Subsection
++++++++++

Sub-subsection
--------------

Text Formatting
---------------

You can apply formatting to your text using various RST tags:

- *italic* or _italic_
- **bold** or __bold__
- ``inline code``

Lists
-----

You can create bulleted lists using asterisks:

* Item 1
* Item 2
* Item 3

Numbered lists are also supported:

1. First item
2. Second item
3. Third item

Links
-----

You can create hyperlinks using the following syntax:

- `Visit Google <http://www.google.com>`_

Images
------

You can include images in your document using the ``image`` directive:

.. image:: img/download.png
   :width: 300
   :height: 200

Code Blocks
-----------

You can include code blocks using the double colons and indentation:

::

    def hello_world():
        print("Hello, World!")

References
-----------

You can create footnotes for references like this [1]_.

.. [1] This is a footnote.

Tables
------

You can create simple tables as well:

+-------+-------+
| Name  | Age   |
+=======+=======+
| Alice | 30    |
+-------+-------+
| Bob   | 28    |
+-------+-------+

Conclusion
----------

This is just a basic introduction to some common reStructuredText tags. RST is a powerful markup language for creating structured documents.

For more information, you can refer to the official RST documentation.

.. _official RST documentation: https://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html
