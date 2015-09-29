import tornado.web
import os
import sys
import subprocess
import tornado.options
import tornado.httpserver
import tornado.ioloop
import os.path

from tornado.options import define,options
define("port", default=8987, help="run on th given port", type=int)

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("index.html")

class VideoHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("video.html")

class FfmpegGetHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("ffmpeg.html")

class DiffHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("diff.html")

class PixiHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("pixi.html")

class EaseljsHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("easeljs.html")

class FfmpegPostHandler(tornado.web.RequestHandler):
    def post(self):
        m3u8 = self.get_argument('data')
        # log = os.system('ffmpeg -i ' + m3u8)
        log = subprocess.Popen('ffmpeg -i ' + m3u8, shell=True, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        result = log.communicate()
        # result = log.stdout.read().decode('utf8')
        # result.terminate();
        # print result
        print result
        # result.kill()
        data = {"no": 0, "data": result[1]}
        self.write(data)

class FlowPlayerHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("flowplayer.html");

handlers = [
        (r"/", MainHandler),
        (r"/video", VideoHandler),
        (r"/ffmpeg", FfmpegGetHandler),
        (r"/m3u8", FfmpegPostHandler),
        (r"/diff", DiffHandler),
        (r"/flow", FlowPlayerHandler),
        (r"/pixi", PixiHandler),
        (r"/easeljs", EaseljsHandler),
    ]

settings = {
    "static_path": os.path.join(os.path.dirname(__file__), "static"),
    "template_path": os.path.join(os.path.dirname(__file__), "template"),
    "debug": True
}

def make_app():
    tornado.options.parse_command_line()
    return tornado.web.Application(handlers, **settings)

if __name__ == "__main__":
    app = make_app()
    app.listen(options.port)
    
    print 'Development server is running at http://127.0.0.1:%s/' % options.port
    print 'Quit the server with Control-C'
    tornado.ioloop.IOLoop.current().start()