import tornado.web
import os
import sys
import subprocess

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

def make_app():
    return tornado.web.Application([
        (r"/", MainHandler),
        (r"/video", VideoHandler),
        (r"/ffmpeg", FfmpegGetHandler),
        (r"/m3u8", FfmpegPostHandler),
        (r"/diff", DiffHandler)
    ],**settings)

settings = {
    "static_path": os.path.join(os.path.dirname(__file__), "static")
}

if __name__ == "__main__":
    app = make_app()
    app.listen(8787)
    tornado.ioloop.IOLoop.current().start()